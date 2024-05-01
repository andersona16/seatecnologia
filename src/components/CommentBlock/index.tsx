import person from "../../assets/icons/person.svg";
import { Container, Image, Text } from "./styles";

const CommentBlock = () => {
  return (
    <Container>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
        suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis
        aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla
        finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec
        efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo
        eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae
        ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis.
        Phasellus tempor tellus eu vulputate tempus.
      </Text>
      <Image src={person} alt="Person" />
    </Container>
  );
};

export default CommentBlock;
