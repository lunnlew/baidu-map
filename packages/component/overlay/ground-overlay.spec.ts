import { shallowMount } from '@vue/test-utils'
import groundoverlay from './ground-overlay.vue'
import { addGroundOverlay } from '../../lib/overlay'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
}
jest.mock('../../lib/overlay', () => ({
    addGroundOverlay: jest.fn(() => overlay)
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(groundoverlay, {
        global: {
            provide: {
                map: {
                    value: {}
                }
            }
        },
        slots: {},
        props: {
            startPoint: {
                lng: 0,
                lat: 0,
            },
            endPoint: {
                lng: 0,
                lat: 0,
            },
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        startPoint: {
            lng: 0,
            lat: 0,
        },
        endPoint: {
            lng: 0,
            lat: 0,
        },
        type: 'image',
        opacity: 0.8,
        url: '',
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addGroundOverlay).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)

})