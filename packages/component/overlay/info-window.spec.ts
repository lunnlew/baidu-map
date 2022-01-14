import { shallowMount } from '@vue/test-utils'
import infowindow from './info-window.vue'
import { addInfoWindow } from '../../lib/overlay'

const overlay = {}
jest.mock('../../lib/overlay', () => ({
    addInfoWindow: jest.fn(() => overlay)
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(infowindow, {
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
                lng: 0,
                lat: 0,
            },
            content: '',
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        point: {
            lng: 0,
            lat: 0,
        },
        content: '',
        width: 0,
        height: 0,
        maxWidth: 0,
        offset: [0, 0],
        title: '',
        enableAutoPan: true,
        enableMaximize: true,
        enableCloseOnClick: true,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addInfoWindow).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)

})