import { Server as NetServer } from 'http'

import { NextApiRequest } from 'next'
import { Server as ServerIO } from 'socket.io'

import  { NextApiResponceServerIo } from '@/type'

export const config = {
    api: {
      bodyParser: false,
    },
  };
  