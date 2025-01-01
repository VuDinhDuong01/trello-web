import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3
        }
    },
})
const ReactQuery = ({ children }: { children: React.ReactNode }) => {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    )
}

export default ReactQuery