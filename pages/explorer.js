import LocationField from "../components/LocationField"
import Panel from "../components/Panel"
import styled from "styled-components"

const Title = styled.h2`
    font-size: 1.6em;
    margin-bottom: 30px;
    color: ${({theme})=>theme.darkText};
`

const NeedsExplorer = () =>
    <Panel>
        <Title>Find activities, groups and services near you</Title>
        <LocationField/>
    </Panel>

export default NeedsExplorer