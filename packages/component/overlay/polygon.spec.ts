import { shallowMount } from '@vue/test-utils'
import polygon from './polygon.vue'
import { addPolygon } from '../../lib/overlay'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
}
jest.mock('../../lib/overlay', () => ({
    addPolygon: jest.fn(() => ({
        polygon: overlay,
        removeOverlay: jest.fn(),
        overallView: jest.fn()
    }))
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(polygon, {
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
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        enableMassClear: true,
        enableClicking: true,
        enableEditing: false,
        overallView: false,
        show: true,
        init: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addPolygon).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)

})