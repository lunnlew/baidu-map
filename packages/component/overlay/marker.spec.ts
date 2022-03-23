import { shallowMount } from '@vue/test-utils'
import marker from './marker.vue'
import { addMaker } from '../../lib/overlay'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
    setTitle: jest.fn(),
}
jest.mock('../../lib/overlay', () => ({
    addMaker: jest.fn(() => overlay)
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(marker, {
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
        offset: [0, 0],
        enableMassClear: true,
        enableDragging: false,
        enableClicking: true,
        raiseOnDrag: false,
        draggingCursor: '',
        icon: '',
        rotation: 0,
        zIndex: undefined,
        title: '',
        label: '',
        labelOptions: {
            "enableMassClear": true,
            "offset": [
                0,
                0,
            ],
            "position": {
                "lat": 39.915119,
                "lng": 116.403963,
            },
            "styles": {},
        },
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addMaker).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)

})