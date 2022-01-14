import { shallowMount } from '@vue/test-utils'
import polyline from './polyline.vue'
import { addCustomPolyline } from '../../lib/overlay'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
}
jest.mock('../../lib/overlay', () => ({
    addCustomPolyline: jest.fn(() => ({
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
        arrowLength: 15,
        arrowAngle: 25,
        arrowWidth: 1,
        arrowPadding: 20,
        arrowHeadlen: 10,
        arrowColor: '#FFF',
        strokeColor: '#FF0000',
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        overallView: false,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addCustomPolyline).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)

})