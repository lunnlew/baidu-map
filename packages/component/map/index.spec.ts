import { shallowMount } from '@vue/test-utils'
import index from './index.vue'
import { BMapGLConstant } from '../../lib/BMapGL'
import { initMap } from '../../lib/map'

jest.mock('../../lib/map')

test('test Map', () => {
    let onReady = () => { }
    const wrapper = shallowMount(index, {
        slots: {
            default: 'Map Content'
        },
        props: {
            center: {
                lng: 116.403963,
                lat: 116.403963,
            },
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        center: {
            lng: 116.403963,
            lat: 116.403963,
        },
        apiKey: '',
        zoom: 13,
        bottomOffset: 0,
        clickInterval: 200,
        enableDragging: true,
        enableRotate: true,
        enableTilt: true,
        enableKeyboard: false,
        enableDblclickZoom: true,
        enableContinuousZoom: true,
        enableWheelZoom: false,
        enableRotateGestures: true,
        enableTiltGestures: true,
        enablePinchZoom: true,
        fixCenterWhenPinch: false,
        enableMapClick: true,
        enableAutoResize: true,
        ebableTraffic: false,
        zoomCenter: null,
        zoomerDuration: 240,
        actionDuration: 450,
        mapType: BMapGLConstant.MapTypeId.BMAP_NORMAL_MAP,
        enableInertialDragging: true,
        drawMargin: 500,
        drawMarginGL: 500,
        enableFulltimeSpotClick: false,
        enableResizeOnCenter: false,
        showControls: false,
        showRealSunlight: true,
        showMilkyway: true,
        earthBackground: null,
        showStreetLayer: true,
        minZoom: null,
        maxZoom: null,
        style: 'default',
        backgroundColor: null,
        enableIconClick: false,
        autoSafeArea: false,
        restrictCenter: true,
        preserveDrawingBuffer: false,
        displayOptions: {
            overlay: true,
            layer: true,
            building: true,
            street: true,
            poi: true,
            skyColors: [],
        },
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(wrapper.findAll('.mapView')).toHaveLength(1)
    expect(wrapper.find('div').text()).toContain('Map Content')
    expect(initMap).toHaveBeenCalledTimes(1)
})