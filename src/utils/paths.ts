import { PRIVATE_BASE_PATH } from '@/constants/routes';

export function getPrivatePath(path: string): string {
    return `/${PRIVATE_BASE_PATH}/${path}`
}