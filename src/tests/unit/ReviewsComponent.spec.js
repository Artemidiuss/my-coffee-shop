import { shallowMount } from '@vue/test-utils'
import ReviewsComponent from '@/components/ReviewsComponent.vue'

describe('ReviewsComponent.vue', () => {
  it('renders reviews correctly', () => {
    const wrapper = shallowMount(ReviewsComponent)
    expect(wrapper.findAll('.review-card').length).toBe(3)
  })

  it('advances to next review on next button click', async () => {
    const wrapper = shallowMount(ReviewsComponent)
    await wrapper.setData({ currentReview: 0 })
    await wrapper.find('.right-arrow').trigger('click')
    expect(wrapper.vm.currentReview).toBe(1)
  })

  it('goes to previous review on previous button click', async () => {
    const wrapper = shallowMount(ReviewsComponent)
    await wrapper.setData({ currentReview: 1 })
    await wrapper.find('.left-arrow').trigger('click')
    expect(wrapper.vm.currentReview).toBe(0)
  })
})
