import { shallowMount } from '@vue/test-utils'
import index from './index.vue'
import { addViewAnimation } from '../../lib/animation'

const animation = {}

jest.mock('../../lib/animation', () => ({
    addViewAnimation: jest.fn(() => animation)
}))

test('test Map', () => {
    let onReady = () => { }
    const wrapper = shallowMount(index, {
        global: {
            provide: {
                map: {
                    value: {}
                }
            }
        },
        slots: {},
        props: {
            show: true,
            keyFrames: [],
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        keyFrames: [],
        duration: 10000,
        delay: 3000,
        interation: 2,
        overallView: false,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().show).toEqual(true)
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addViewAnimation).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any[]
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].start).toBeDefined()
    expect(readyEvent[0][0].cancel).toBeDefined()
    expect(readyEvent[0][0]).toHaveProperty('bmobj', animation)
})