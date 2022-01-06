import { BMapGL } from "typings";

const CustomPolylineLine = function (this: any) {
    let map = arguments[0] as BMapGL.Map;
    let canvas = arguments[1] as HTMLCanvasElement;
    let points = arguments[2] as BMapGL.Point[];
    let options = arguments[3] as BMapGL.PolylineOptions;
    let pixel_points = [] as {
        pixel: BMapGL.Pixel;
    }[]
    this.getPixelPoints = function () {
        pixel_points = []
        var cp = map.getBounds();
        var sw = cp.getSouthWest();
        var ne = cp.getNorthEast();
        for (let i = 0; i < points.length; i++) {
            // if (points[i].lng >= sw.lng &&
            //     points[i].lng <= ne.lng &&
            //     points[i].lat >= sw.lat &&
            //     points[i].lat <= ne.lat) {
            let pixel = map.pointToPixel(points[i]);
            pixel_points.push({
                pixel: pixel
            })
            // }
        }
        return pixel_points;
    }
    this.draw = function () {
        let ctx = canvas.getContext('2d')
        if (!ctx) return;
        pixel_points = this.getPixelPoints()
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        if (pixel_points.length < 2) return;
        if (ctx) {
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = options.strokeWeight;
            if (options.strokeStyle == 'dash') {
                ctx.setLineDash([5, 5]);
            }
            ctx.strokeStyle = options.strokeColor;
            ctx.globalAlpha = options.strokeOpacity;
            ctx.lineCap = options.lineCap as any;
            ctx.moveTo(pixel_points[0].pixel.x, pixel_points[0].pixel.y);
            for (let i = 1; i < pixel_points.length; i++) {
                ctx.lineTo(pixel_points[i].pixel.x, pixel_points[i].pixel.y);
            }
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }
    }
}

const CustomPolyline = function (this: any) {
    let points = arguments[0] as BMapGL.Point[];
    let options = arguments[1] || {} as BMapGL.PolylineOptions
    this._CustomPolylineLine = null as any;
    this.adjustSize = function () {
        if (this._map && this.canvas) {
            let size = this._map.getSize();
            let canvas = this.canvas;
            canvas.width = size.width;
            canvas.height = size.height;
            canvas.style.width = canvas.width + 'px';
            canvas.style.height = canvas.height + 'px';
        }
    }
    this.adjustRatio = function (ctx: CanvasRenderingContext2D & {
        backingStorePixelRatio?: number;
        webkitBackingStorePixelRatio?: number;
        mozBackingStorePixelRatio?: number;
        msBackingStorePixelRatio?: number;
        oBackingStorePixelRatio?: number;
    } | null) {
        if (!ctx) return;
        var backingStore = ctx.backingStorePixelRatio || ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        var pixelRatio = (window.devicePixelRatio || 1) / backingStore;
        var canvasWidth = ctx.canvas.width;
        var canvasHeight = ctx.canvas.height;
        ctx.canvas.width = canvasWidth * pixelRatio;
        ctx.canvas.height = canvasHeight * pixelRatio;
        ctx.canvas.style.width = canvasWidth + 'px';
        ctx.canvas.style.height = canvasHeight + 'px';
        ctx.scale(pixelRatio, pixelRatio);
    }
    this.draw = function () {
        if (this._map && this.canvas) {
            this._draw()
        }
    }
    this._draw = function () {
        var map = this._map;
        var size = map.getSize();
        var center = map.getCenter();
        if (center) {
            var pixel = map.pointToOverlayPixel(center);
            this.canvas.style.left = pixel.x - size.width / 2 + 'px';
            this.canvas.style.top = pixel.y - size.height / 2 + 'px';
            this.dispatchEvent('draw');
            this._CustomPolylineLine && this._CustomPolylineLine.draw();
        }
    }
    this.getContainer = function () {
        return this.canvas;
    };

    this.show = function () {
        this.canvas.style.display = 'block';
    };

    this.hide = function () {
        this.canvas.style.display = 'none';
    };

    this.setZIndex = function (zIndex: number) {
        this.canvas.style.zIndex = zIndex;
    };

    this.getZIndex = function () {
        return this.zIndex;
    };

    this.initialize = function (map: BMapGL.Map) {
        this._map = map;
        var canvas = this.canvas = document.createElement('canvas');
        var ctx = this.ctx = this.canvas.getContext('2d');
        canvas.style.cssText = 'position:absolute;' + 'left:0;' + 'top:0;' + 'z-index:' + this.zIndex + ';';
        this.adjustSize();
        this.adjustRatio(ctx);
        map.getPanes().labelPane.appendChild(canvas);
        var that = this;
        this._CustomPolylineLine = new (CustomPolylineLine as any)(map, canvas, points, {
            ...options
        });
        map.addEventListener('resize', function () {
            that.adjustSize();
            that._draw();
        });
        map.addEventListener("zoomend", () => {
            that._draw();
        });
        return this.canvas;
    }
}

export default CustomPolyline;