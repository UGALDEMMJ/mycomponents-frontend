import { StylesConfig } from "react-select";

export const customStyles: StylesConfig<
    { value: string; label: string },
    true
> = {
    control: (base) => ({
        ...base,
        fontSize: "0.75rem",
        lineHeight: "calc(1 / 0.75)",
        backgroundColor: "black",
        color: "white",
        borderColor: "oklch(0.715 0.143 215.221)",
        boxShadow: "none", // Quita el borde azul de focus
        "&:hover": {
            borderColor: "oklch(0.715 0.143 215.221)", // Mantén el borde cyan al hacer hover
        },
    }),
    menu: (base) => ({
        ...base,
        fontSize: "0.75rem",
        lineHeight: "calc(1 / 0.75)",
        backgroundColor: "black",
        color: "white",
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
            ? "cyan"
            : state.isFocused
            ? "#222"
            : "black",
        color: "white",
        ":active": {
            backgroundColor: "cyan",
            color: "black",
        },
    }),
    multiValue: (base) => ({
        ...base,
        backgroundColor: "cyan",
        color: "black",
    }),
    multiValueLabel: (base) => ({
        ...base,
        color: "black",
    }),
    multiValueRemove: (base) => ({
        ...base,
        color: "black",
        ":hover": {
            backgroundColor: "#00bcd4",
            color: "white",
        },
    }),
    input: (base) => ({
        ...base,
        color: "white",
    }),
    singleValue: (base) => ({
        ...base,
        color: "white",
    }),
    placeholder: (base) => ({
        ...base,
        color: "white",
    }),
};
