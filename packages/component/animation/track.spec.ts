import { shallowMount } from '@vue/test-utils'
import track from './track.vue'
import { addTrackAnimation, initTrackAnimation } from '../../lib/animation'
import { nextTick } from 'vue'
const animation = {
    start: jest.fn(),
    pause: jest.fn(),
    cancel: jest.fn(),
    continue: jest.fn(),
}
jest.mock('../../lib/animation', () => ({
    initTrackAnimation: jest.fn(() => Promise.resolve({ BMapGLLib: undefined })),
    addTrackAnimation: jest.fn(() => ({
        animation: animation,
    }))
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(track, {
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
        overallView: false,
        tilt: 30,
        duration: 20000,
        delay: 3000,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(initTrackAnimation).toHaveBeenCalledTimes(1)
    await nextTick()
    expect(addTrackAnimation).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].start).toBeDefined()
    expect(readyEvent[0][0].pause).toBeDefined()
    expect(readyEvent[0][0].cancel).toBeDefined()
    expect(readyEvent[0][0].continue).toBeDefined()
    expect(readyEvent[0][0]).toHaveProperty('bmobj', animation)
})