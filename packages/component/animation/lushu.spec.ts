import { shallowMount } from '@vue/test-utils'
import lushu from './lushu.vue'
import { addLushu, initLushu } from '../../lib/animation'
import { nextTick } from 'vue'

const animation = {
    start: jest.fn(),
    pause: jest.fn(),
    stop: jest.fn(),
}
jest.mock('../../lib/animation', () => ({
    initLushu: jest.fn(() => Promise.resolve({ BMapGLLib: undefined })),
    addLushu: jest.fn(() => ({
        animation: animation,
    }))
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(lushu, {
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
        points: [],
        defaultContent: '',
        geodesic: false,
        autoCenter: false,
        autoView: true,
        speed: 500,
        icon: '',
        enableRotation: true,
        overallView: false,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(initLushu).toHaveBeenCalledTimes(1)
    await nextTick()
    expect(addLushu).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any[]
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].start).toBeDefined()
    expect(readyEvent[0][0].pause).toBeDefined()
    expect(readyEvent[0][0].stop).toBeDefined()
    expect(readyEvent[0][0]).toHaveProperty('bmobj', animation)
})