import { shallowMount } from '@vue/test-utils'
import richmarker from './rich-marker.vue'
import { addRichMarker, initRichMarker } from '../../lib/tool'
import { nextTick } from 'vue'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
}
jest.mock('../../lib/tool', () => ({
    initRichMarker: jest.fn(() => Promise.resolve({ BMapGLLib: undefined })),
    addRichMarker: jest.fn(() => overlay)
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(richmarker, {
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
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        point: {
            lng: 0,
            lat: 0,
        },
        anchor: [0, 0],
        enableDragging: true,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(initRichMarker).toHaveBeenCalledTimes(1)
    await nextTick()
    expect(addRichMarker).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)

})