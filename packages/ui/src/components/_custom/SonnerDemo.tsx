'use client';

import { Button } from '@repo/ui/components/_base/button';
import { toast } from 'sonner';

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={
        () =>
          toast('Event has been created.', {
            action: { label: '확인', onClick: () => null },
            duration: 2500,
          })
        // , {
        //   description: 'Sunday, December 03, 2023 at 9:00 AM',
        //   action: {
        //     label: '확인',
        //     onClick: () => console.log('Undo'),
        //   },
        // })
      }
    >
      Show Toast
    </Button>
  );
}
