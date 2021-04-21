const MSG = ($toast, text) =>
  $toast.error(text, { duration: 3000, keepOnHover: true })

export default ({ $axios, error, $auth, $toast }) => {
  $axios.onError(({ response }) => {
    const statusCode = response.status
    const message = response.data.message

    switch (statusCode) {
      case 401:
        MSG($toast, '401: Вы неавторизованы')
        // .then($auth.logout())
        break

      case 403:
        $toast.error('403: Доступ запрещен', {
          duration: 3000,
          keepOnHover: true,
        })
        break

      case 422:
        break

      case 500:
        break

      default:
        error({
          statusCode,
          message,
        })
    }
  })
}
