export interface Color {
  id: string
  name: string
  hex: string
}

export interface ColorFormData {
  name: string
  hex: string
}

export interface Toast {
  message: string
  type: 'success' | 'error'
}
