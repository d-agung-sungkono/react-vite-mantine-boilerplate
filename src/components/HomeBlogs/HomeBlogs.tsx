import { Container, SimpleGrid, Text, ThemeIcon, Title, rem } from '@mantine/core';
import { MOCKDATA } from '../../data/blogsMockData';
import classes from './HomeBlogs.module.css';

interface FeatureProps {
  icon: React.FC<any>;
  title: string;
  description: string;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function HomeBlogs() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper} id="blog">
      <Title className={classes.title}>Integrate effortlessly with any technology stack</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}