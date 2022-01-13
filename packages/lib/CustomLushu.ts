import { BMapGLRef } from "./map";
function CustomLushu(this: any) {
    let points = arguments[0] as BMapGL.Point[];
    let options = (arguments[1] || {}) as Required<BmComponent.CustomLushuOptions>

    options = Object.assign({}, {
        speed: 5,
        time: 10
    }, options)

    this._map = null as any;
    this._canvas = null as any;
    this._ctx = null as any;
    this.zIndex = 0;
    this._timer = null as any;
    this._moving = false
    this._next = false
    this._count = 0
    let will_points = [] as BMapGL.Point[]
    let _listeners = {} as any
    let _cache_distance = 0

    /**
     * 隐藏
     */
    this.hide = function () {
        if (this._canvas) {
            this._canvas.style.display = 'none';
        }
    };

    /**
     * 显示
     */
    this.show = function () {
        if (this._canvas) {
            this._canvas.style.display = 'block';
        }
    };

    /**
     * 绑定事件
     */
    this.on = function (event: string, cb: Function) {
        if (!_listeners[event]) {
            _listeners[event] = []
        }
        _listeners[event].push(cb)
        return this;
    }

    /**
     * 派发事件
     */
    this.fire = function (event: string) {
        let args = Array.prototype.slice.call(arguments, 1);
        let self = this
        _listeners[event].forEach(function (fn: { apply: (arg0: null, arg1: any[]) => void; }) {
            fn.apply(self, args);
        })
        return this;
    }

    /**
     * 调整大小
     */
    this.adjustSize = function () {
        if (this._map && this._canvas) {
            let size = this._map.getSize();
            let canvas = this._canvas;
            canvas.width = size.width;
            canvas.height = size.height;
            canvas.style.width = canvas.width + 'px';
            canvas.style.height = canvas.height + 'px';
        }
    }
    /**
     * 调整缩放
     */
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
    /**
     * 移除方法
     */
    this.remove = function () {
        this._canvas.remove()
        this._canvas = null
        this._ctx = null
        this._map = null
        this.fire('remove')
    }
    /**
     * 初始化方法
     */
    this.initialize = function (map: BMapGL.Map) {
        this._map = map;
        if (!this._canvas) {
            let canvas = this._canvas = document.createElement('canvas');
            canvas.style.cssText = 'position:absolute;' + 'left:0;' + 'top:0;' + 'z-index:' + this.zIndex + ';';
            let ctx = this._ctx = canvas.getContext('2d');
            this.adjustSize();
            this.adjustRatio(ctx);
            this.on('draw', this.draw.bind(this));
            map.getPanes().floatPane.appendChild(canvas);
        }
        return this._canvas;
    }
    /**
     * 绘制入口
     */
    this.draw = function () {
        if (this._map && this._canvas) {
            this._draw()
        }
    }
    /**
     * 计算点的像素坐标
     */
    this.calculatePixels = function (points: BMapGL.Point[]) {
        let map = this._map;
        let pixel = [];
        for (let i = 0; i < points.length; i++) {
            let p = map.pointToOverlayPixel(points[i]);
            pixel.push({
                x: p.x,
                y: p.y
            });
        }
        return pixel;
    }
    /**
     * 实际绘制
     */
    this._draw = function () {
        let ctx = this._ctx;
        let current_points = points
        if ((will_points.length + points.length) < 2) return
        if (this._next) {
            let p = will_points.shift()
            if (p) {
                current_points.push(p)
            }
        }
        if (current_points.length < 2) return
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        let pixels = this.calculatePixels(current_points);
        if (this._moving) {
            let last_point = current_points[current_points.length - 2];
            let target_point = current_points[current_points.length - 1];
            // 计算移动距离
            _cache_distance = _cache_distance || this._map.getDistance(last_point, target_point);
            // 移动步长
            let move_step = options.speed / (1000 / options.time);
            // 总帧数
            let unit_count = _cache_distance / move_step
            // 每帧移动像素距离
            let last_pixel = this._map.pointToOverlayPixel(last_point);
            let target_pixel = this._map.pointToOverlayPixel(target_point);
            let unit_x = (target_pixel.x - last_pixel.x) / unit_count;
            let unit_y = (target_pixel.y - last_pixel.y) / unit_count;
            // 下一个点像素
            let next_pixel = {
                x: last_pixel.x + unit_x * this._count,
                y: last_pixel.y + unit_y * this._count
            }
            if (this._count >= unit_count ||
                (target_pixel.x - last_pixel.x > 0) && next_pixel.x > target_pixel.x ||
                (target_pixel.x - last_pixel.x < 0) && next_pixel.x < target_pixel.x ||
                (target_pixel.y - last_pixel.y > 0) && next_pixel.y > target_pixel.y ||
                (target_pixel.y - last_pixel.y < 0) && next_pixel.y < target_pixel.y
            ) {
                next_pixel.x = target_pixel.x;
                next_pixel.y = target_pixel.y;
                _cache_distance = 0;
                if (will_points.length > 0) {
                    this._next = true
                } else {
                    this._next = false
                    this._moving = false
                }
                this._count = 0
            } else {
                this._next = false
            }
            pixels[pixels.length - 1] = next_pixel
            this.fire('moving', {
                pixel: next_pixel,
                point: BMapGLRef.value ? this._map.overlayPixelToPoint(new BMapGLRef.value.Pixel(next_pixel.x, next_pixel.y)) : null
            })
        } else {
            clearInterval(this._timer)
        }
        this._drawLines(pixels);
    }
    /**
     * 绘制路线
     */
    this._drawLines = function (pixels: any[]) {
        let ctx = this._ctx;
        if (pixels.length < 2) return;
        ctx.save()
        ctx.beginPath();
        ctx.moveTo(pixels[0].x, pixels[0].y);
        for (let i = 1; i < pixels.length; i++) {
            ctx.lineTo(pixels[i].x, pixels[i].y);
        }
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
    /**
     * 增加新的路径点
     */
    this.addPoints = function () {
        for (let i = 0; i < arguments.length; i++) {
            for (let item of Array.from(arguments[i])) {
                will_points.push(item as any)
            }
        }
        if (this._moving) {
            return
        }
        this._moving = true
        this._next = true
        this._count = 0
        _cache_distance = 0;
        this._timer = setInterval(() => {
            this._count++;
            this.fire('draw')
        }, options.time)
    }
}
export default CustomLushu;