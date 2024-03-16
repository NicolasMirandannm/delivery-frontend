'use client';

import { NavigationMenuLayout } from '@/app/admin/navigation-menu-layout/navigation-menu-layout';
import { AdminRouteKeys } from '@/app/admin/navigation-menu-layout/routes-config/routes-map';

export default function AdminHomePage() {
  return (
    <NavigationMenuLayout keyPage={AdminRouteKeys.HOME}>
        <h1>Admin Home</h1>
    </NavigationMenuLayout>
  );
}