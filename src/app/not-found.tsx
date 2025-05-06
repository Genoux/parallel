import Button from '@/components/atoms/ui/Button';
import Container from '@/components/atoms/layout/Container';
import Text from '@/components/atoms/typography/Text';

export default function NotFound() {
  return (
    <Container className="flex h-screen items-center justify-center">
      <div className="text-center flex flex-col items-center gap-6">
        <div className="flex flex-col gap-1">
          <Text size="large" tag="h2">
            404
          </Text>
          <Text size="medium" tag="h1">
            Page not found
          </Text>
        </div>
        <Button href="/" target="_self">Return home</Button>
      </div>
    </Container>
  );
}
