const get = async (endpoint: string): Promise<{ data: unknown; status: number; statusMessage: string }> => {
  const res = await fetch(`https://rickandmortyapi.com/api/${endpoint}`)

  // response.status >= 200 && response.status < 300
  if (res.ok) {
    const data = await res.json()

    return {
      data,
      status: res.status,
      statusMessage: res.statusText,
    }
  }

  return {
    data: {},
    status: res.status,
    statusMessage: res.statusText,
  }
}

export default get
