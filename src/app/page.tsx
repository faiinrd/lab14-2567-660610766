"use client";
import { Container, Text, Title, Pagination, Space, Rating, Textarea, Button, Group, Divider } from "@mantine/core";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">Your rating</Title>

      <Rating defaultValue={0} size="lg" />

      <Textarea
            label="Your review"
            placeholder="Do you enjoy eating?"
            mt="xs"
            rows={3}
      />

      <Button variant="filled" color="orange" mt="xs" size="sm" fz={13}>Submit Review</Button>

      <Divider my="sm" />
      <Group justify="center" ta="center">
        <Title order={4}>Elon Musk</Title>
        <Rating defaultValue={5} readOnly />
      </Group>
      <Text c="dimmed" ta="center" fz={15}>Best pizza in this world. I give you X score.</Text>

      <Divider my="sm" />
      <Group justify="center" ta="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating defaultValue={4} readOnly />
      </Group>
      <Text c="dimmed" ta="center" fz={15}>My favourite part is pepperoni</Text>
      
      <Group justify="center" mt="md" >
        <Pagination total={20} color="orange" />
      </Group>

      <Footer year="2024" name="Noprada Kritwattananont" id="660610766"/>

    </Container>
  );
}
