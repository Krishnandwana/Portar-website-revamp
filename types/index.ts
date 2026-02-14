export interface Project {
  id: string;
  name: string;
  description: string;
  modelUrl: string;
  thumbnailUrl?: string;
  progress: number;
  status: 'active' | 'completed' | 'pending';
  createdAt: string;
  updatedAt: string;
  metadata: {
    partCount: number;
    fileSize: string;
    dimensions: string;
  };
}

export interface ModelViewerProps {
  modelUrl: string;
  autoRotate?: boolean;
  showControls?: boolean;
  cameraPosition?: [number, number, number];
}

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
}

export interface FilterState {
  search: string;
  status: string[];
  dateRange: {
    from: Date | null;
    to: Date | null;
  };
}
