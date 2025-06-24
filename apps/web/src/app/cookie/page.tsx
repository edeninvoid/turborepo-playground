import ResponsiveCheckoutItem from '@repo/ui/components/checkout/ResponsiveCheckoutItem';
import { cookies } from 'next/headers';

export default async function CookiePage() {
  const cookieStore = await cookies();
  const session = cookieStore.get('CLIENT_SESSION_ID')?.value ?? 'cookie value not found.';
  console.log(session);
  return (
    <div className="m-10 flex flex-col">
      <ResponsiveCheckoutItem />
    </div>
  );
}
