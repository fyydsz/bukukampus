const BAHASA_INDONESIA: Record<string, string> = {
  sejarah_bahasa_indonesia: '',
  kedudukan_fungsi: '',
  diksi: '',
  paragraf: '',
  kalimat: '',
  karangan: ''
}

const LOGIKA_MATEMATIKA: Record<string, string> = {
  proposisi: '',
  tabel_kebenaran: ''
}

const DOCS_ITEMS: Record<string, any> = {
  index: "Welcome",
  tentang: '',
  bahasa_indonesia: {
    title: "Bahasa Indonesia",
    items: BAHASA_INDONESIA
  },
  logika_matematika: {
    title: "Logika Matematika",
    items: LOGIKA_MATEMATIKA
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