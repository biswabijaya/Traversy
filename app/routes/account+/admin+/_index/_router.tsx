import { redirect } from '@remix-run/react';
import { LoaderFunctionArgs } from '@remix-run/node';

export async function loader({ request }: LoaderFunctionArgs) {
  return redirect('dashboard', {
    headers: {
      'Set-Cookie': 'redirect_from=' + request.url,
    },
  });
}
