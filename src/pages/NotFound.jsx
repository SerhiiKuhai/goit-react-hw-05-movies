import { Link } from 'react-router-dom';
import { TitleH1 } from 'components/Title/Title.styled';
import { Container } from 'components/Container/Container.styled';
import { Button } from 'components/Button/Button.styled';

function NotFound() {
  return (
    <Container>
      <TitleH1>Page not found</TitleH1>
      <Button type="submit">
        <Link to="/">Go back home</Link>
      </Button>
    </Container>
  );
}

export default NotFound;
