export async function GET(request, { params }) {
  const { phone } = await params


  const contacts = [
    {
      id: 1,
      name: "Bernis Nukic",
      firstname: "Bernis",
      middlename: "",
      lastname: "Nukic",
      phone: "62336200"
    },
    {
      id: 2,
      name: "Adnan Cudic",
      firstname: "Adnan",
      middlename: "",
      lastname: "Cudic",
      phone: "62336201"
    },
    {
      id: 3,
      name: "Jasmin Dolamic",
      firstname: "Jasmin",
      middlename: "",
      lastname: "Dolamic",
      phone: "62336202"
    },
    {
      id: 4,
      name: "Amer Galijasevic",
      firstname: "Amer",
      middlename: "",
      lastname: "Galijasevic",
      phone: "62336203"
    }
  ]

  const filtered = contacts.find(contacts => contacts.phone === phone)

  if (filtered) {
    return Response.json(
      filtered
    )
  }

  return Response.json(
    contacts
  )
}