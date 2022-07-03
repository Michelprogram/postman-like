export const isSelected = {
  methods: {
    isSelected: (tab: number, expected: number) => tab == expected,
  },
};

export const updateTab = {
  methods: {
    updateTab: (toUpdate: number, index: number) => {
      index = toUpdate;
    },
  },
};
