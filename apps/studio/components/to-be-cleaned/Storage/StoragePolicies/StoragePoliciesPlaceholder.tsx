import Panel from 'components/ui/Panel'
import { Archive } from 'lucide-react'

const StoragePoliciesPlaceholder = () => (
  <Panel
    title={[
      <div key="storagePlaceholder" className="flex w-full items-center justify-between">
        <div className="flex items-center space-x-4">
          <Archive size="18" />
          <h4>Bucket policies</h4>
        </div>
      </div>,
    ]}
  >
    <div className="p-4 px-6">
      <p className="text-sm text-foreground-light">
        Create a bucket first to start writing policies!
      </p>
    </div>
  </Panel>
)

export default StoragePoliciesPlaceholder
