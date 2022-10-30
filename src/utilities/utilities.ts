export const numberWithCommas = (x: string | number) => {
    return new Intl.NumberFormat("fa-IR", {}).format(+x);
};
