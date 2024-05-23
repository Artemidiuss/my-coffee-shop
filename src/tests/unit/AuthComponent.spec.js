import { shallowMount } from '@vue/test-utils'
import AuthComponent from '@/components/AuthComponent.vue'

describe('AuthComponent.vue', () => {
  it('renders login form by default', () => {
    const wrapper = shallowMount(AuthComponent)
    expect(wrapper.find('h2').text()).toBe('Вхід')
  })

  it('toggles to register form', async () => {
    const wrapper = shallowMount(AuthComponent)
    await wrapper.find('a').trigger('click.prevent')
    expect(wrapper.find('h2').text()).toBe('Реєстрація')
  })

  it('emits close event on close button click', async () => {
    const wrapper = shallowMount(AuthComponent)
    await wrapper.find('.close').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
