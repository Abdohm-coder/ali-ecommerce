import { customerIcon } from "../icons/customer";

export const data = {
  logo: {
    dark_mode:
      "data:image/png;base64,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",
    light_mode:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAABoCAYAAAAQEe8+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjU2NmViYzViNCwgMjAyMi8wNS8wOS0wODoyNTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkYzQTc1NzZGMUIxMTFFQ0IyMkQ4MTgyNDZFMzlFRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkYzQTc1NzVGMUIxMTFFQ0IyMkQ4MTgyNDZFMzlFRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRkY0ODJGQkYwRjIxMUVDQjIyRDgxODI0NkUzOUVGMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRkY0ODJGQ0YwRjIxMUVDQjIyRDgxODI0NkUzOUVGMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvkqAAMAAAZNSURBVHja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",
  },
};

export const homepage = {
  hero: {
    images: [
      "https://images.unsplash.com/photo-1617294864710-bb97f05457f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1617294864705-eaf3c911259f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    ],
    title: "وسادة نابوفا الطبية",
  },
  product: {
    product_name: "وسادة نابوفا",
    product_price: 2900,
    offer_options: [
      {
        id: "",
        discount: false,
        discount_type: "percentage",
        discount_percentage_value: 20,
        discount_price: 2320,
        price_before: 6200,
        price_total: 5040,
        discount_value: 1160,
        quantity: 1,
        shipping: 400,
        badge: "العرض الأكثر طلبا",
      },
      {
        id: "",
        product_price: 2900,
        discount: true,
        discount_type: "percentage",
        discount_percentage_value: 20,
        discount_price: 2320,
        price_before: 6200,
        price_total: 5040,
        discount_value: 1160,
        quantity: 2,
        shipping: 400,
        badge: "العرض الأكثر طلبا",
      },
      {
        id: "",
        product_price: 2900,
        discount: true,
        discount_type: "percentage",
        discount_percentage_value: 20,
        discount_price: 2320,
        price_before: 6200,
        price_total: 5040,
        discount_value: 1160,
        quantity: 2,
        shipping: 400,
        badge: "العرض الأكثر طلبا",
      },
    ],
  },
  features: {
    title: "ما الذي يجعل وسادة نابوفا مميزة جدا؟",
    description:
      "تتميز مادة المايكروفايبر بأنها ناعمة وداعمة في نفس الوقت، إذن فهي تحتضن الرأس والرقبة بلطف مع دعم عدم الضغط، ستنام بشكل مريح بغض النظر وعن وضعية نومك المفضلة.",
    images: [
      "https://images.unsplash.com/photo-1625266008996-67bc5f9ffb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      ,
      "https://images.unsplash.com/photo-1548484352-dc0b3cc1bca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    ],
    items_non_image: [
      {
        id: "",
        title: "مناسبة للحساسية المفرطة",
      },
      {
        id: "",
        title: "🇪🇸 جودة إسبانية ممتازة",
      },
      {
        id: "",
        title: "مستخدمة في أرقى الفنادق",
      },
      {
        id: "",
        title: "مصنوعة لتدوم",
      },
    ],
    items_with_image: [
      {
        id: "",
        image:
          "https://images.unsplash.com/photo-1626218174358-7769486c4b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        title: "تبقى باردة طوال الليل 🥶",
        description:
          "يعمل الميكروفايبر كشبكة تهوية ماصة للرطوبة يتيح تدفق الهواء بشكل مستمر حتى تتمكن من الحفاظ على برودة الراس طوال الليل.",
      },
      {
        id: "",
        image:
          "https://images.unsplash.com/photo-1626218174358-7769486c4b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        title: "فائقة التحمل 💪🏻",
        description:
          "مصنعة من نسيج الميكروفايبر الذاكري، الذي يتميز بالمتانة الفائقة ، و يجعل الوسادة تحافظ على شكلها ليلة بعد ليلة.",
      },
    ],
  },
  records: [
    {
      id: "",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" ><path fill="#67befa" fillRule="evenodd" d="M13.346 0.742334C12.5684 0.656852 11.7841 0.656852 11.0065 0.742334C10.8537 0.759139 10.717 0.845344 10.6361 0.976078L9.10383 3.45015L8.28619 1.90619C8.15922 1.66643 7.86421 1.57168 7.62137 1.69266C5.37095 2.8138 3.43976 4.24961 2.49779 5.88926C2.02011 6.72075 1.78831 7.62074 1.92102 8.55584C2.05349 9.48926 2.54104 10.4007 3.39907 11.2721C5.26408 13.1659 8.1997 12.7109 10.4033 10.8526C12.639 8.96727 14.2782 5.56447 13.7882 1.18377C13.7622 0.951281 13.5785 0.767899 13.346 0.742334Z" clipRule="evenodd" /><path fill="#034dca" fillRule="evenodd" d="M7.95247 6.75471C8.272 7.01828 8.31737 7.49099 8.05379 7.81052C7.27325 8.75677 6.05797 9.85171 4.78743 10.7951C3.52364 11.7335 2.13391 12.5752 0.992408 12.9647C0.600388 13.0985 0.174155 12.8891 0.0403892 12.4971C-0.0933765 12.1051 0.11598 11.6788 0.508 11.5451C1.43228 11.2297 2.67565 10.4948 3.89321 9.59079C5.10404 8.69173 6.21838 7.67831 6.89666 6.85603C7.16024 6.5365 7.63294 6.49113 7.95247 6.75471Z" clipRule="evenodd" /></svg>`,
      text: "منتجات ذات جودة عالية",
      span: "100%",
    },
    {
      id: "",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path
        fill="#67befa"
        fill-rule="evenodd"
        d="M5.7749 2.34291C6.96071 2.03095 8.26271 2.16862 9.40765 2.82965C11.7109 4.15941 12.5 7.10452 11.1702 9.40773L11.0901 9.54647L10.6943 9.31792C10.5134 9.21352 10.2868 9.23248 10.1258 9.36547C9.96484 9.49845 9.90346 9.71747 9.97186 9.91474L10.4947 11.4224C10.5761 11.6572 10.8174 11.7965 11.0614 11.7496L12.6285 11.4486C12.8336 11.4092 12.9925 11.2465 13.0272 11.0406C13.0619 10.8347 12.965 10.6289 12.7842 10.5245L12.3892 10.2965L12.4693 10.1577C14.2133 7.13708 13.1783 3.27458 10.1576 1.53061C8.65653 0.663936 6.94595 0.483794 5.39327 0.892269C4.99268 0.997653 4.75338 1.40782 4.85876 1.8084C4.96414 2.20899 5.37431 2.44829 5.7749 2.34291ZM1.49999 3.89613L1.08691 3.65765C0.906088 3.55325 0.809176 3.34747 0.843861 3.14157C0.878547 2.93568 1.03753 2.77301 1.24258 2.73361L2.83642 2.4274C3.08039 2.38052 3.32177 2.51988 3.40316 2.7546L3.93489 4.28802C4.0033 4.4853 3.94192 4.70431 3.78095 4.8373C3.61998 4.97029 3.39331 4.98925 3.21249 4.88485L2.7991 4.64618C1.51243 6.94124 2.30713 9.85091 4.5924 11.1703C5.75103 11.8393 7.07061 11.9723 8.2678 11.6456C8.66741 11.5366 9.07973 11.7722 9.18876 12.1718C9.29779 12.5714 9.06223 12.9837 8.66262 13.0927C7.09519 13.5204 5.36157 13.3465 3.8424 12.4694C0.83968 10.7357 -0.200848 6.90868 1.49999 3.89613Z"
        clip-rule="evenodd"></path>
      <path
        fill="#034dca"
        fill-rule="evenodd"
        d="M6.03754 5.01978C5.0913 5.01978 4.32422 5.78686 4.32422 6.7331C4.32422 7.4569 4.76276 8.07787 5.27134 8.5665C5.78506 9.06005 6.41203 9.4585 6.87082 9.73497C6.95019 9.7828 7.04951 9.7828 7.12889 9.73497C7.58767 9.4585 8.21465 9.06005 8.72836 8.5665C9.23695 8.07787 9.67549 7.4569 9.67549 6.7331C9.67549 5.78686 8.90841 5.01978 7.96216 5.01978C7.60562 5.01978 7.27415 5.1289 6.99985 5.31539C6.72556 5.1289 6.39408 5.01978 6.03754 5.01978Z"
        clip-rule="evenodd"></path>
    </svg>`,
      text: "الكثير من الزبائن الراضين",
      span: "100+",
    },
    {
      id: "",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path
        fill="#034dca"
        fillRule="evenodd"
        d="M3.8772 6.69775C3.8772 6.28354 4.21298 5.94775 4.6272 5.94775H6.89808C7.12591 5.94775 7.3414 6.05132 7.48373 6.22923L8.99765 8.12163C9.2564 8.44508 9.20396 8.91705 8.88052 9.1758C8.55707 9.43456 8.0851 9.38212 7.82634 9.05867L6.53761 7.44775H4.6272C4.21298 7.44775 3.8772 7.11197 3.8772 6.69775Z"
        clipRule="evenodd"
      />
      <path
        fill="#67befa"
        fillRule="evenodd"
        d="M8.57167 0.100091C8.16694 0.0119673 7.7674 0.268628 7.67928 0.673359C7.59116 1.07809 7.84782 1.47763 8.25255 1.56575C8.78767 1.68227 9.30151 1.88099 9.77579 2.15485C10.1345 2.36198 10.5932 2.2391 10.8003 1.88039C11.0075 1.52169 10.8846 1.06299 10.5259 0.855858C9.91741 0.504517 9.25819 0.249571 8.57167 0.100091ZM5.7474 1.56575C6.15213 1.47763 6.40879 1.07809 6.32067 0.673359C6.23255 0.268628 5.83301 0.0119673 5.42828 0.100091C4.74176 0.249571 4.08254 0.504517 3.47408 0.855858C3.11538 1.06299 2.9925 1.52169 3.19962 1.88039C3.40675 2.2391 3.86545 2.36198 4.22416 2.15485C4.69843 1.88099 5.21228 1.68227 5.7474 1.56575ZM2.45445 2.56471C2.78191 2.81837 2.84174 3.28946 2.58808 3.61692C2.28568 4.0073 2.0392 4.43794 1.85575 4.8964C1.70187 5.28096 1.26537 5.46797 0.880796 5.31409C0.496227 5.16021 0.309218 4.72371 0.4631 4.33914C0.698355 3.75121 1.01445 3.19896 1.40225 2.69834C1.65591 2.37088 2.127 2.31105 2.45445 2.56471ZM13.994 6.92978C13.9976 6.51558 13.6648 6.17688 13.2506 6.17328C12.8364 6.16968 12.4977 6.50253 12.4941 6.91673C12.4869 7.74072 12.3248 8.55479 12.0175 9.31681C11.9471 9.30907 11.8755 9.30509 11.803 9.30509C10.731 9.30509 9.86206 10.1741 9.86206 11.246C9.86206 12.318 10.731 13.1869 11.803 13.1869C12.8749 13.1869 13.7439 12.318 13.7439 11.246C13.7439 10.7968 13.5913 10.3832 13.3351 10.0543C13.7602 9.06799 13.9847 8.00577 13.994 6.92978ZM1.50586 6.92325C1.50586 6.50904 1.17007 6.17325 0.755859 6.17325C0.341646 6.17325 0.00585938 6.50904 0.00585938 6.92325C0.00585938 8.77818 0.742727 10.5571 2.05436 11.8688C2.70382 12.5182 3.47483 13.0334 4.32338 13.3849C5.17194 13.7364 6.08141 13.9173 6.99988 13.9173C7.41409 13.9173 7.74988 13.5815 7.74988 13.1673C7.74988 12.7531 7.41409 12.4173 6.99988 12.4173C6.2784 12.4173 5.56397 12.2752 4.89741 11.9991C4.23084 11.723 3.62519 11.3183 3.11502 10.8081C2.08469 9.77778 1.50586 8.38036 1.50586 6.92325ZM11.5456 2.56471C11.873 2.31105 12.3441 2.37088 12.5978 2.69834C12.9856 3.19896 13.3017 3.75121 13.5369 4.33914C13.6908 4.72371 13.5038 5.16021 13.1192 5.31409C12.7347 5.46797 12.2982 5.28096 12.1443 4.8964C11.9608 4.43794 11.7144 4.0073 11.412 3.61692C11.1583 3.28946 11.2181 2.81837 11.5456 2.56471Z"
        clipRule="evenodd"
      />
    </svg>`,
      text: "توصيل سريع",
      span: "48h",
    },
  ],
  feedbacks: {
    has_feedbacks: true,
    title: "ماذا قال زبائننا عن منتجاتنا؟",
    reviews_number: 242,
    reviews_average: 4.6,
    reviews: [
      {
        id: "",
        name: "Fatma, Boumerdes",
        avatar: null,
        feedback:
          "اليوم 60 ليلة من استعمالي لنابوفا , خليني نكون صريحة طولت باه والفت بيها لكن غير توالفها مابدلوهاش ,أكثر حاجا عجبتني القماش لي مخدومة بيها تاع صيف يعطيك واحد الاحساس تاع البرود في الراسو الرقبة ننصحكم بيها لبنات",
      },
      {
        id: "",
        name: "Rachid, Tizi Ouzou",
        avatar: null,
        feedback:
          "j'en ai commandé 2 avec 20% de réduction et ils ont été livrés en 48h L'oreiller le plus confortable de tous les temps",
      },
      {
        id: "",
        name: "Hanan, Alger",
        avatar: null,
        feedback: "Très confortable avec bonus de réduction des allergies",
      },
      {
        id: "",
        name: "Melina, Bedjaia",
        avatar: null,
        feedback:
          "J'adore ! dima noudh sbah b les douleurs au cou et aux épaules. J'utilise mon oreiller depuis quelques semaines maintenant et je n'ai plus de douleurs ! Le meilleur oreiller que j'ai eu !",
      },
      {
        id: "",
        name: "Farid, Batna",
        avatar: null,
        feedback:
          "Il garde ma tête plus fraîche tt la nuit et me fournit le soutien parfait",
      },
    ],
  },
  footer: [
    {
      id: "",
      label: "رقم الهاتف",
      text: "0794654188",
    },
    {
      id: "",
      label: "العنوان",
      text: "المنطقة الصناعية بسطيف",
    },
  ],
};
