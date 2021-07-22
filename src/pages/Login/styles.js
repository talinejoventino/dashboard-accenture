import styled from "styled-components";
import { Mixins } from "../../styles/mixins";

export const Styled = {
    Error: styled.p`
        align-self: center;
        justify-self: center;
        color: ${Mixins.colors.red};
        font-family: ${Mixins.fonts.semi_bold};
        font-size: ${Mixins.typograph.paragraph};
    `
}