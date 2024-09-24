export const SCHEMA = {
  title: 'Slider Banner Principal',
  type: 'object',
  properties: {
    slider: {
      title: 'Slider Principal',
      type: 'array',
      items: {
        title: 'Slider Principal',
        type: 'object',
        properties: {
          desktopImage: {
            title: 'Imagen para desktop',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          mobileImage: {
            title: 'Imagen para mobile',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          imageAlt: {
            title: 'Alt de la imagen',
            type: 'string',
            default: '',
          },
          imageTitle: {
            title: 'Titulo de la imagen',
            type: 'string',
            default: '',
          },
          content: {
            title: "CTA",
            type: "object",
            properties: {
              additionalDef: {
                title: "¿ Tiene CTA ?",
                enum: ["Si", "No"],
                type: "string",
              },
            },
            dependencies: {
              additionalDef: {
                oneOf: [
                  {
                    properties: {
                      additionalDef: {
                        enum: [
                          "No"
                        ]
                      },
                      tabSelect: {
                        title: "",
                        type: 'object',
                        properties: {
                          urlBanner: {
                            title: 'Url redireccionamiento',
                            type: 'string',
                            default: '',
                          },
                          externo: {
                            title: '¿El link es externo ?',
                            type: 'boolean',
                            default: false,
                          },

                        }

                      }

                    }
                  },
                  {
                    properties: {
                      additionalDef: {
                        enum: [
                          "Si"
                        ]
                      },
                      tabSelect: {
                        title: "",
                        properties: {
                          textoPrincipal: {
                            title: 'Texto Principal',
                            type: 'string',
                            default: '',
                          },
                          textoDescriptcion: {
                            title: 'Texto Descripción',
                            type: 'string',
                            default: '',
                          },
                          colorText: {
                            title: 'Color Texto',
                            type: 'string',
                            description:
                              "Color de texto en HEXADECIMAL - Valor Defecto #fff ( Blanco )",
                            default: '',
                          },
                          textAlign: {
                            type: 'string',
                            title: 'Alineación del Titulo',
                            default: 'Izquierda',
                            enumNames: ['Izquierda', 'Centro', 'Derecha'],
                            enum: [`start`, `center`, `end`]
                          },
                          alineacionContent: {
                            type: 'string',
                            title: 'Alineación horizontal del contenido',
                            default: 'Izquierda',
                            enumNames: ['Izquierda', 'Centro', 'Derecha'],
                            enum: [`flex-start`, `center`, `flex-end`]
                          },
                          anchoMaximo: {
                            title: 'Ancho Maximo del contenido',
                            type: 'string',
                            description:
                              "Defina el ancho maximo del CTA  en px ej: 410px",
                            default: '',
                          },
                          posicionHorizontal: {
                            type: 'string',
                            title: 'Posición Horizontal',
                            default: 'Centro',
                            enumNames: ['Izquiera', 'Centro', 'Derecha'],
                            enum: [`left`, `center`, `right`]
                          },
                          posicionVertical: {
                            type: 'string',
                            title: 'Posición Vertical',
                            default: 'Centro',
                            enumNames: ['Arriba', 'Centro', 'Abajo'],
                            enum: [`flex-start`, `center`, `flex-end`]
                          },
                          posicionHorizontalMobileBtn: {
                            type: 'string',
                            title: 'Posición Horizontal Btn Mobile',
                            default: 'Centro',
                            enumNames: ['Izquiera', 'Centro', 'Derecha'],
                            enum: [`left`, `center`, `right`]
                          },

                          itemsBtn: {
                            title: 'Group Contenido',
                            type: 'array',
                            minItems: 1,
                            maxItems: 5,
                            items: {
                              title: 'Item Contenido',
                              type: 'object',
                              properties: {
                                __editorItemTitle: {
                                  title: 'Texto del boton',
                                  type: 'string',
                                  default: '',
                                },
                                link: {
                                  title: 'Link',
                                  type: 'string',
                                  default: '',
                                },
                                externo: {
                                  title: '¿El link es externo ?',
                                  type: 'boolean',
                                  default: false,
                                },
                                colorText: {
                                  title: 'Color Texto',
                                  type: 'string',
                                  description:
                                    "Color de texto en HEXADECIMAL - Valor Defecto #fff ( Blanco )",
                                  default: '',
                                },
                                colorFondo: {
                                  title: 'Color Fondo',
                                  type: 'string',
                                  description:
                                    "Color de texto en HEXADECIMAL - Valor Defecto #000 ( Negro )",
                                  default: '',
                                },
                                colorborde: {
                                  title: 'Color Borde',
                                  type: 'string',
                                  description:
                                    "Color del borde en HEXADECIMAL - Valor Defecto #FFF ( Blanco )",
                                  default: '',
                                },
                                colorTextoHover: {
                                  title: 'Color texto - Efecto Hover',
                                  type: 'string',
                                  description:
                                    "Color del texto - Efecto hover en HEXADECIMAL - Valor Defecto #000 ( Negro )",
                                  default: '',
                                },
                                colorFondoHover: {
                                  title: 'Color Fondo - Efecto Hover',
                                  type: 'string',
                                  description:
                                    "Color del Fondo - Efecto hover en HEXADECIMAL - Valor Defecto #EBF73A",
                                  default: '',
                                },
                                tamanoFuenteDesk: {
                                  title: 'Tamaño texto Desktop ',
                                  type: 'string',
                                  description:
                                    "Tamaño del texto en pixeles - ej; 18px",
                                  default: '',
                                },
                                tamanoFuenteMob: {
                                  title: 'Tamaño texto Mobile ',
                                  type: 'string',
                                  description:
                                    "Tamaño del texto en pixeles - ej; 14px",
                                  default: '',
                                },
                              },
                            },
                          },

                        }
                      },
                    }


                  }
                ]
              }
            }
          },
        },
        default: [],
      },
    },
  }
}
