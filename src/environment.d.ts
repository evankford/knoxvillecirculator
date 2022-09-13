declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MAILCHIMP_API_KEY: string
      MAILCHIMP_SERVER: string
      MAILCHIMP_LIST_ID: string
    }
  }
}
