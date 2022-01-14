import { shallowMount } from '@vue/test-utils'
import marker3d from './marker3d.vue'
import { addMaker3D } from '../../lib/overlay'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
}
jest.mock('../../lib/overlay', () => ({
    addMaker3D: jest.fn(() => overlay)
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(marker3d, {
        global: {
            provide: {
                map: {
                    value: {}
                }
            }
        },
        slots: {},
        props: {
            point: {
                lng: 116.403963,
                lat: 39.915119,
            },
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        point: {
            lng: 116.403963,
            lat: 39.915119,
        },
        height: 200,
        size: 50,
        shape: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.8,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addMaker3D).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)

})