import { Server as NetServer, Socket } from 'net'
import { NextApiResponse } from 'next'
import { Server as SocketIOServer } from 'socket.io'
import { Server , Member , Profile } from "@prisma/client"

export type ServerWithMembersProfiles = Server & {
    members : ( Member & {profile : Profile})[];
}

export type NextApiResponceServerIo = NextApiResponse & {
    socket : Socket & {
        server : NetServer & {
            io : SocketIOServer;
        };
    };
}