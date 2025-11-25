const BINDO: Record<string, string> = {
  sejarah_bahasa_indonesia: 'Sejarah & Perkembangan',
  kedudukan_fungsi: 'Kedudukan & Fungsi Bahasa'
}

const DOCS_ITEMS: Record<string, any> = {
  tentang: 'Tentang Penulis',
  bahasa_indonesia: {
    title: "Bahasa Indonesia",
    items: BINDO
  }
}

export default {
  index: {
    title: "Home",
    type: "page",
  },
  docs: {
    title: "Documentation",
    type: "page",
    items: DOCS_ITEMS
  },

}