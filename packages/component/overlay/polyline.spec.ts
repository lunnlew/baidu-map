import { shallowMount } from '@vue/test-utils'
import polyline from './polyline.vue'
import { addPolyline } from '../../lib/overlay'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
}
jest.mock('../../lib/overlay', () => ({
    addPolyline: jest.fn(() => ({
        polyline: overlay,
        removeOverlay: jest.fn(),
        overallView: jest.fn()
    }))
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(polyline, {
        global: {
            provide: {
                map: {
                    value: {}
                }
            }
        },
        slots: {},
        props: {
            points: [],
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        points: [],
        strokeColor: '#FF0000',
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        enableMassClear: true,
        enableEditing: false,
        enableClicking: true,
        overallView: false,
        clip: true,
        geodesic: false,
        show: true,
        init: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addPolyline).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)

})