#!/usr/bin/env node
import 'dotenv/config'
import {bootstrap} from 'hapiour-decorators'
import {AppServer} from './server'

bootstrap(AppServer)
