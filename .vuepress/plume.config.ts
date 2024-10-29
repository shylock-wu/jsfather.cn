import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/images/avatar.jpg',
  docsRepo: 'https://github.com/shylock-wu',
  docsDir: 'src',

  appearance: true,

  profile: {
    avatar: '/images/avatar.jpg',
    name: 'Shylock blog',
    description: 'hhhhello world',
    circle: true,
    location: 'beijing',
    organization: 'xxx company',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/shylock-wu' },
  ],

})
