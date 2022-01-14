import { shallowMount } from '@vue/test-utils'
import lushu from './lushu.vue'
import { addCustomLushu } from '../../lib/overlay'

const overlay = {
    show: jest.fn(),
    hide: jest.fn(),
    on: jest.fn(),
}
jest.mock('../../lib/overlay', () => ({
    addCustomLushu: jest.fn(() => ({
        lushu: overlay
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
            points: [],
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        points: [],
        speed: 50,
        time: 10,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addCustomLushu).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(overlay)
    expect(readyEvent[0][0].addPoints).toBeDefined()

})