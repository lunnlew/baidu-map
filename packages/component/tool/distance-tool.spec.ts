import { shallowMount } from '@vue/test-utils'
import distancetool from './distance-tool.vue'
import { addDistanceTool, initDistanceTool } from '../../lib/tool'
import { nextTick } from 'vue'

const tool = {}

jest.mock('../../lib/tool', () => ({
    initDistanceTool: jest.fn(() => Promise.resolve({ BMapGLLib: undefined })),
    addDistanceTool: jest.fn(() => tool)
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(distancetool, {
        global: {
            provide: {
                map: {
                    value: {}
                }
            }
        },
        slots: {},
        props: {
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(initDistanceTool).toHaveBeenCalledTimes(1)
    await nextTick()
    expect(addDistanceTool).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any[]
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].open).toBeDefined()
    expect(readyEvent[0][0].close).toBeDefined()
    expect(readyEvent[0][0]).toHaveProperty('bmobj', tool)

})