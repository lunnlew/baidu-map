import { shallowMount } from '@vue/test-utils'
import circle from './circle.vue'
import { addCircle } from '../../lib/overlay'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
}
jest.mock('../../lib/overlay', () => ({
    addCircle: jest.fn(() => overlay)
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(circle, {
        global: {
            provide: {
                map: {
                    value: {}
                }
            }
        },
        slots: {},
        props: {
            center: {
                lng: 116.403963,
                lat: 39.915119,
            },
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        center: {
            lng: 116.403963,
            lat: 39.915119,
        },
        radius: 200,
        strokeColor: 'black',
        strokeWeight: 1,
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        fillColor: '',
        fillOpacity: 0.5,
        enableMassClear: true,
        enableEditing: false,
        enableClicking: true,
        overallView: false,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addCircle).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)

})