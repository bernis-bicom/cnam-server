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
    },
    {
      id: 5,
      name: "Adnan Privatni",
      firstname: "Adnan",
      middlename: "",
      lastname: "Privatni",
      phone: "38763021445"
    },
    {
      id: 6,
      name: "Adnan UK",
      firstname: "Adnan",
      middlename: "",
      lastname: "UK",
      phone: "+442033990928"
    },

  ]

  const filtered = contacts.find(contacts => contacts.phone === phone)

  if (filtered) {
    return Response.json(
      filtered
    )
  }

  return Response.json(
    {

    }
  )
}