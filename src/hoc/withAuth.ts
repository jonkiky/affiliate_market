import { useEffect, ComponentType } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth'; // Adjust the import path as necessary

// Define a type for the component props
interface WithAuthProps {
  // You can define any additional props here if needed
}

export function withAuth<P extends WithAuthProps>(Component: ComponentType<P>) {
  const AuthenticatedComponent = (props: P) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/auth/signin'); // Redirect to login if not authenticated
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; // Prevent page from rendering while redirecting
    }

    // Render the wrapped component
    return <Component {...props} />; 
  };

  // Set display name for easier debugging
  AuthenticatedComponent.displayName = `withAuth(${Component.displayName || Component.name || 'Component'})`;

  return AuthenticatedComponent;
}
