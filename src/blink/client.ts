import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'medical-tourism-india-ci9c4sbk',
  authRequired: true
})

export default blink