const BAHASA_INDONESIA: Record<string, string> = {
  sejarah_bahasa_indonesia: "",
  kedudukan_fungsi: "",
  diksi: "",
  paragraf: "",
  kalimat: "",
  karangan: "",
};

const LOGIKA_MATEMATIKA: Record<string, string> = {
  proposisi: "",
  operator_logika: "",
  tabel_kebenaran: "",
  ekuivalen_logis: "",
  proposisi_majemuk: "",
  hukum_logika: "",
  pembuktian_logika: "",
};

const DASAR_PEMROGRAMAN_PYTHON: Record<string, string> = {
  install_python: "",
  sintaks_dasar: "",
};

const KALKULUS: Record<string, string> = {
  pengenalan_kalkulus: "",
  bilangan_kompleks: "",
  modulus: "",
  turunan: "",
};

const DOCS_ITEMS: Record<string, string | { items: Record<string, string> }> = {
  tentang: "",
  kontribusi: "",
  bahasa_indonesia: {
    items: BAHASA_INDONESIA,
  },
  logika_matematika: {
    items: LOGIKA_MATEMATIKA,
  },
  kalkulus: {
    items: KALKULUS,
  },
  dasar_pemrograman_python: {
    items: DASAR_PEMROGRAMAN_PYTHON,
  },
};

const ROUTES = {
  index: {
    title: "Home",
    type: "page",
  },
  docs: {
    title: "Documentation",
    type: "page",
    items: DOCS_ITEMS,
  },
  support: {
    title: "Support",
    type: "page",
    href: "https://saweria.co/fyyy",
  },
};

export default ROUTES;
